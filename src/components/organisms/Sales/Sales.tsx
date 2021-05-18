import React from "react";
import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import Panel from "../Panel";
import Slider from "../../molecules/Slider";
import MiniButton from "../../atoms/MiniButton";
import Button from "../../atoms/Button";
import ProductAds from "../../molecules/ProductAds";
import SliderBlock from "../../atoms/SliderBlock";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../../../store/selector";
import { IProductList } from "../../../store/models/productList";
import ProductListItem from "../../molecules/ProductListItem";
import { useHistory } from "react-router";
import ProductAdsSlider from "../../molecules/ProductAdsSlider";

const Sales: React.FC = () => {
    const classes = useStyles();
    const productList = useSelector(getProductList);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleNewListClick = () => {
        history.push("/createList");
    };

    const handleDeleteClick = (id: number) => {
        dispatch.productList.delete(id);
    };

    return (
        <Panel>
            <Box className={classes.root}>
                <Box className={classes.slider}>
                    <Slider
                        count={2}
                        children={[
                            <SliderBlock />,
                            <SliderBlock next cupon color='yellow' />,
                            <SliderBlock cupon color='black' />,
                        ]}
                    />
                </Box>
                <Box className={classes.line}>
                    {/* <MiniButton typeBtn={"plus"} /> */}
                    {/* <MiniButton typeBtn={"code"} /> */}
                    <Button
                        className={classes.btn}
                        icon
                        value={"Новый список"}
                        typeBtn={"white"}
                        onClick={handleNewListClick}
                    />
                </Box>
                <Box className={classes.productList}>
                    {!productList.length && (
                        <Typography className={classes.productListText}>
                            Здесь будут списки покупок
                        </Typography>
                    )}
                    {!!productList.length &&
                        productList.map((item: IProductList, index: number) => (
                            <ProductListItem
                                key={`${item?.id}-list-${index}`}
                                name={item?.name}
                                date={item?.date}
                                time={item?.time}
                                products={item?.products}
                                onDeleteClick={() =>
                                    handleDeleteClick(item?.id)
                                }
                            />
                        ))}
                </Box>
                <ProductAdsSlider />
            </Box>
        </Panel>
    );
};

export default Sales;
