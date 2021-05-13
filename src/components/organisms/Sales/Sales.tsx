import React from "react";
import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import Panel from "../Panel";
import Slider from "../../molecules/Slider";
import MiniButton from "../../atoms/MiniButton";
import Button from "../../atoms/Button";
import ProductAds from "../../molecules/ProductAds";
import SliderBlock from "../../atoms/SliderBlock";
import { useSelector } from "react-redux";
import { getProductList } from "../../../store/selector";
import { IProductList } from "../../../store/models/productList";
import ProductListItem from "../../molecules/ProductListItem";
import { useHistory } from "react-router";

const Sales: React.FC = () => {
    const classes = useStyles();
    const productList = useSelector(getProductList);
    const history = useHistory();

    const handleNewListClick = () => {
        history.push("/createList");
    };

    return (
        <Panel>
            <Box className={classes.root}>
                <Box className={classes.slider}>
                    <Slider count={2} children={<SliderBlock />} />
                </Box>
                <Box className={classes.line}>
                    <MiniButton typeBtn={"plus"} />
                    <MiniButton typeBtn={"code"} />
                    <Button
                        icon
                        value={"Новый список"}
                        typeBtn={"white"}
                        onClick={handleNewListClick}
                    />
                </Box>
                <Box className={classes.productList}>
                    {!!productList.length &&
                        productList.map((item: IProductList, index: number) => (
                            <ProductListItem
                                key={`${item?.id}-list-${index}`}
                                name={item?.name}
                                date={item?.date}
                                time={item?.time}
                                products={item?.products}
                            />
                        ))}
                </Box>
                <Box className={classes.line}>
                    <Slider count={1} children={<ProductAds />} />
                </Box>
            </Box>
        </Panel>
    );
};

export default Sales;
