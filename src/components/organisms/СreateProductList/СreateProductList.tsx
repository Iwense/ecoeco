import React, { useState } from "react";
import { useStyles } from "./styles";
import { Box, SvgIcon, Typography } from "@material-ui/core";
import { ReactComponent as Pencil } from "../../../assets/svg/pencil.svg";
import { ReactComponent as Plus } from "../../../assets/svg/plus.svg";
import { IProduct } from "../../../store/models/productList";
import { useDispatch } from "react-redux";

import Panel from "../Panel";
import Input from "../../atoms/Input";
import Slider from "../../molecules/Slider";
import ProductAds from "../../molecules/ProductAds";
import Button from "../../atoms/Button";
import { useHistory } from "react-router-dom";

const СreateProductList: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const [editMode, setEditMode] = useState<boolean>(false);
    const [nameList, setNameList] = useState("Новый список");
    const [items, setItems] = useState<IProduct[]>([
        { id: 1, title: "", amount: 0 },
    ]);

    const handlePencilClick = () => {
        if (nameList) setEditMode((prev) => !prev);
    };

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            handlePencilClick();
        }
    };

    const handlePlusClick = () => {
        const newId = items[items.length - 1]?.id + 1 || Date.now();
        setItems([...items, { id: newId, title: "", amount: 0 }]);
    };

    const handleInputOnBlur = (
        event: React.ChangeEvent<HTMLInputElement>,
        id: number
    ) => {
        const value = event.target.value;
        if (!value && items.length > 1) {
            const newItems = items.filter((item: IProduct) => item.id !== id);
            setItems(newItems);
        }
    };

    const handleAddClick = () => {
        const newItems = items.filter((item: IProduct) => item?.title !== "");
        const newItem = {
            name: nameList,
            products: newItems,
        };
        if (!!newItems.length) {
            dispatch.productList.addNewProductList(newItem);
            history.push("/sales");
        }
    };

    const handleInputItemChange = (
        id: number,
        event: React.ChangeEvent<HTMLInputElement>,
        title: boolean
    ) => {
        const value = event.target.value;
        const newItems = items.map((el: IProduct) => {
            if (el.id !== id) {
                return el;
            } else {
                if (title) {
                    return { ...el, title: value };
                } else {
                    if (/^\d+$/.test(value)) {
                        return { ...el, amount: +value };
                    } else {
                        return { ...el, amount: 0 };
                    }
                }
            }
        });

        setItems(newItems);
    };

    const handleProductKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            handlePlusClick();
        }
    };

    return (
        <Panel>
            <Box className={classes.root}>
                {!editMode && (
                    <Box className={classes.nameWrapper}>
                        <Typography className={classes.nameList}>
                            {nameList}
                        </Typography>
                        <SvgIcon
                            component={Pencil}
                            className={classes.pencil}
                            onClick={handlePencilClick}
                        />
                    </Box>
                )}

                {editMode && (
                    <Box className={classes.nameWrapper}>
                        <Box className={classes.inputWrapper}>
                            <Input
                                value={nameList}
                                onChange={(e) => setNameList(e.target.value)}
                                clearClick={() => setNameList("")}
                                onKeyPress={(e: React.KeyboardEvent) =>
                                    handleKeyPress(e)
                                }
                            />
                        </Box>

                        <SvgIcon
                            component={Pencil}
                            className={classes.pencil}
                            onClick={handlePencilClick}
                        />
                    </Box>
                )}

                <Typography className={classes.subtitle}>
                    Создайте новый список покупок
                </Typography>

                <Box className={classes.content}>
                    <Box className={classes.listWrapper}>
                        {!!items.length &&
                            items.map((item: IProduct) => (
                                <Box
                                    key={`${item?.id}-input`}
                                    className={classes.itemLine}
                                >
                                    <Input
                                        value={item?.title}
                                        placeholder={"Наименование"}
                                        className={classes.input}
                                        onKeyPress={(e: React.KeyboardEvent) =>
                                            handleProductKeyPress(e)
                                        }
                                        onChange={(e) =>
                                            handleInputItemChange(
                                                item?.id,
                                                e,
                                                true
                                            )
                                        }
                                        onBlur={(e) =>
                                            handleInputOnBlur(e, item.id)
                                        }
                                    />
                                    <Box className={classes.amountBox}>
                                        <Typography
                                            className={classes.amountBoxText}
                                        >
                                            Шт
                                        </Typography>
                                    </Box>
                                    <Input
                                        value={String(item?.amount)}
                                        className={classes.input}
                                        onKeyPress={(e: React.KeyboardEvent) =>
                                            handleProductKeyPress(e)
                                        }
                                        onChange={(e) =>
                                            handleInputItemChange(
                                                item?.id,
                                                e,
                                                false
                                            )
                                        }
                                    />
                                </Box>
                            ))}
                    </Box>

                    <SvgIcon
                        component={Plus}
                        className={classes.iconPlus}
                        onClick={handlePlusClick}
                    />
                </Box>

                {/* <Box className={classes.slider}>
                    <Slider count={1} children={<ProductAds />} />
                </Box> */}

                <Button
                    value={"Добавить чек"}
                    className={classes.btn}
                    onClick={handleAddClick}
                />
            </Box>
        </Panel>
    );
};

export default СreateProductList;
