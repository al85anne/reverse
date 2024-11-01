
import React, { useEffect } from "react";
import Chart from "chart.js"

const CardChartLine = (props: { labels: string[], height: number, subTitle: string, maxWidth: string, data: number[] }) => {

    useEffect(() => {
        var config = {
            type: "line",
            data: {
                labels: props.labels,
                datasets: [
                    {
                        label: new Date().getFullYear(),
                        backgroundColor: "#FFFFFF",
                        borderColor: "#3b82f6",
                        data: props.data,
                        fill: false,
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                    display: false,
                    text: "Sales Charts",
                    fontColor: "white",
                },
                legend: {
                    labels: {
                        fontColor: "black",
                    },
                    align: "end",
                    position: "bottom",
                },
                tooltips: {
                    mode: "index",
                    intersect: false,
                },
                hover: {
                    mode: "nearest",
                    intersect: true,
                },
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                fontColor: "rgba(0,0,0,.7)",
                            },
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: "Month",
                                fontColor: "black",
                            },
                            gridLines: {
                                display: false,
                                borderDash: [2],
                                borderDashOffset: [2],
                                color: "rgba(255, 255, 255)",
                                zeroLineColor: "rgba(255, 255, 255)",
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                fontColor: "rgba(0,0,0,.7)",
                            },
                            display: false,
                            scaleLabel: {
                                display: false,
                                labelString: "Value",
                                fontColor: "black",
                            },
                            gridLines: {
                                borderDash: [0],
                                drawBorder: true,
                                borderDashOffset: [2],
                                color: "rgba(255, 255, 255)",
                                zeroLineColor: "rgba(0, 0, 0)",
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                },
            },
        };
        var ctx: HTMLCanvasElement | null = document.querySelector("canvas#line-chart")

        if (ctx) {
            ctx.getContext("2d");
            //@ts-ignore
            window.myLine = new Chart(ctx, config);
        }
    }, [])

    return (
        <>
            <div className={"flex flex-col  min-h-32 w-full justify-between overflow-hidden  border-stone-200 max-md:pb-4 max-md:min-h-24 rounded-3xl  p-4 h-fit px-4 " + props.maxWidth} >
                <div className="mb-0 bg-transparent rounded-t">
                    <div className="flex items-center justify-end">
                        <span className="p-2 px-3 text-sm text-white bg-blue-500 rounded-full">{props.subTitle}
                        </span>
                    </div>
                </div>
                <div className="flex-auto w-full ">
                    {/* Chart */}
                    <div className="relative w-full ">
                        <canvas id="line-chart" style={{ height: "100%", width: "100%" }}></canvas>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardChartLine