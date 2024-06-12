"use client";

import { Document, Page, pdfjs } from "react-pdf";
import { HomeTemplate } from "../../templates/HomeTemplate";
import { Button, Container, Typography, Zoom } from "@mui/material";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { useState } from "react";
import { useSelector } from "react-redux";
import { perfilSelectors } from "../../store/perfil/perfilSlice";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export const ManualPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState();

  const selectedCarInfo = useSelector(perfilSelectors.getSelectedCarInfo)

  const handleNextPage = () => {
    pageNumber < totalPages ? setPageNumber(pageNumber + 1) : setPageNumber(1);
  };

  const handlePrevPage = () => {
    pageNumber > 1 ? setPageNumber(pageNumber - 1) : setPageNumber(totalPages);
  };

  const handleItemClick = (e) => {
    let pageToJump = e.pageNumber;

    if (pageToJump) setPageNumber(pageToJump);
  };

  const handleLoadData = (e) => {
    let totalPages = e._pdfInfo.numPages;
    setTotalPages(e._pdfInfo.numPages);
  };

  return (
    <HomeTemplate>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button variant="contained" onClick={handlePrevPage}>
          Anterior
        </Button>
        <Typography
          alignContent={"center"}
        >{`${pageNumber}/${totalPages}`}</Typography>
        <Button variant="contained" onClick={handleNextPage}>
          Siguiente
        </Button>
      </Container>
      <Container>
        <div style={{ width: "80vw", height: "75vh", overflow: "auto" }}>
          <TransformWrapper
            limitToBounds={false}
            minScale={0.2}
            initialScale={0.5}
          >
            <TransformComponent>
              <Document
                file={selectedCarInfo.manualSrc}
                onItemClick={handleItemClick}
                onLoadSuccess={handleLoadData}
              >
                <Page pageNumber={pageNumber} height={"800"} scale={0.9} />
              </Document>
            </TransformComponent>
          </TransformWrapper>
        </div>
      </Container>
    </HomeTemplate>
  );
};
