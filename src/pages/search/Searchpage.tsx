import styles from "./SearchPage.module.css";
import React, { useEffect } from "react";
import { FilterArea, ProductList } from "../../components";
import { useParams, useLocation } from "react-router-dom";
import { Spin } from "antd";
import { searchProduct } from "../../redux/productSearch/slice";
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { MainLayout } from "../../layouts/mainLayout";
interface MatchParams {
  keywords: string;
}

export const SearchPage: React.FC = () => {
  const { keywords } = useParams<MatchParams>();

  const loading = useSelector((state) => state.productSearch.loading);
  const error = useSelector((state) => state.productSearch.error);
  const productList = useSelector((state) => state.productSearch.data);
  const pagination = useSelector((state) => state.productSearch.pagination);

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(searchProduct({ nextPage: 1, pageSize: 10, keywords }));
  }, [location]);

  const onPageChange = (nextPage, pageSize) => {
    dispatch(searchProduct({ nextPage, pageSize, keywords }));
  };
  if (loading) {
    return (
      <Spin
        size="large"
        style={{
          marginTop: 200,
          marginBottom: 200,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
        }}
      />
    );
  }
  if (error) {
    return <div>Website Error: {error} </div>;
  }

  return (
    <MainLayout>
      {/* 分类过滤器 */}
      <div className={styles["product-list-container"]}></div>
      <FilterArea />
      {/* 产品列表 */}
      <div className={styles["product-list-container"]}></div>
      <ProductList
        data={productList}
        paging={pagination}
        onPageChange={onPageChange}
      />
    </MainLayout>
  );
};