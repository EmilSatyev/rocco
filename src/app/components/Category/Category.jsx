import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CategoryTitle from "./CategoryTitle/CategoryTitle";
import CategoryBody from "./CategoryBody/CategoryBody";

const Category = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const { catalog, status } = useSelector((state) => state.catalog);

  const categoryObj = catalog.find((cat) => cat.url === category);
  console.log(status)

  React.useEffect(() => {
    if (status === "error") {
      return navigate("/404");
    }
  }, [status, navigate]);

  return (
    <>
      {status === "success" && category === "door_handlers" ? (
        <>
          <CategoryTitle {...categoryObj} />
          <CategoryBody />
        </>
      ) : (
        "Загрузка"
      )}
    </>
  );
};

export default Category;
