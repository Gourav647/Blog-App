import React from "react";
import { Box } from "@mui/material";
import { useRef, useEffect } from "react";

const Newpost = () => {
    const canvasRef = useRef()
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        // Example drawing: a simple rectangle
        context.fillStyle = "blue";
        context.fillRect(50, 50, 100, 100);
    }, []);
    return (
        <>
            {" "}
            <Box>
                <canvas
                    ref={canvasRef}
                    width={500}
                    height={500}
                    style={{ border: "1px solid black" }}
                />
            </Box>
        </>
    );
};

export default Newpost;
