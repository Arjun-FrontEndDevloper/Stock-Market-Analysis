const stocks = [
  "AAPL",
  "MSFT",
  "GOOGL",
  "AMZN",
  "PYPL",
  "TSLA",
  "JPM",
  "NVDA",
  "NFLX",
  "DIS",
];

async function fetchStockData(stocks) {
  const stockDataList = [];

  for (const stock of stocks) {
    try {
      const response = await fetch(
        `https://stocksapi-uhe1.onrender.com/api/stocks/getstockstatsdata?symbol=${stock}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const stockStats = data.stocksStatsData?.[0]?.[stock] || {};

      stockDataList.push({
        symbol: stock,
        bookValue: stockStats.bookValue ?? "N/A",
        profit: stockStats.profit ?? 0,
      });
    } catch (error) {
      console.error(`Error fetching data for ${stock}:`, error);
      stockDataList.push({
        symbol: stock,
        bookValue: "Error",
        profit: "Error",
      });
    }
  }

  return stockDataList;
}

async function displayStockData() {
  const stockData = await fetchStockData(stocks);
  const listContainer = document.getElementById("stockDataList");

  listContainer.innerHTML = ""; // Clear previous data

  stockData.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.innerHTML = `
      <span class="stockSpan">${item.symbol}</span>
      <span class="bookValueSpan">$${item.bookValue}</span>
      <span class="profitSpan">${
        item.profit !== "Error" ? item.profit.toFixed(2) : "N/A"
      }%</span>
    `;

    // 🔹 Debugging Click Event
    listItem.addEventListener("click", () => {
      console.log(`Clicked: ${item.symbol}`);
      createStockChart(item.symbol);
    });

    listContainer.appendChild(listItem);
  });
}

document.addEventListener("DOMContentLoaded", displayStockData);

let selectedTimeframe = "1mo"; // Default timeframe
let currentStockSymbol = null; // Stores the last selected stock

function updateTimeframe(timeframe) {
  selectedTimeframe = timeframe;
  if (currentStockSymbol) {
    createStockChart(currentStockSymbol);
  }
}

async function createStockChart(stockSymbol) {
  try {
    currentStockSymbol = stockSymbol; // Save selected stock

    const response = await fetch(
      `https://stocksapi-uhe1.onrender.com/api/stocks/getstocksdata?symbol=${stockSymbol}`
    );
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    if (!data?.stocksData?.length) {
      alert(`No stock data available for ${stockSymbol}`);
      return;
    }

    const stockObject = data.stocksData[0];
    const stockTimeframes = stockObject[stockSymbol];

    if (!stockTimeframes[selectedTimeframe]) {
      alert(`No ${selectedTimeframe} stock data available for ${stockSymbol}`);
      return;
    }

    const stockData = stockTimeframes[selectedTimeframe];

    const labels = stockData.timeStamp.map((ts) =>
      new Date(ts * 1000).toLocaleDateString()
    );
    const prices = stockData.value;

    // Find peak and low values
    const highestPrice = Math.max(...prices);
    const lowestPrice = Math.min(...prices);
    const peakIndex = prices.indexOf(highestPrice);
    const lowIndex = prices.indexOf(lowestPrice);
    const peakTimestamp = labels[peakIndex];
    const lowTimestamp = labels[lowIndex];

    document.getElementById(
      "peakValue"
    ).textContent = `📈 High: $${highestPrice.toFixed(2)} (${peakTimestamp})`;
    document.getElementById(
      "lowValue"
    ).textContent = `📉 Low: $${lowestPrice.toFixed(2)} (${lowTimestamp})`;

    const canvas = document.getElementById("stockChart");
    if (!canvas) {
      console.error("Chart canvas not found!");
      return;
    }
    const ctx = canvas.getContext("2d");

    // Destroy existing chart before creating a new one
    if (window.chartInstance) {
      window.chartInstance.destroy();
    }

    window.chartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: `${stockSymbol} (${selectedTimeframe}) Stock Price`,
            data: prices,
            borderColor: "rgb(75, 192, 192)",
            backgroundColor: "green",
            borderWidth: 2,
            pointRadius: 0, // Hide data points
            pointHoverRadius: 8, // Enlarges points when hovered
          },
        ],
      },
      options: {
        scales: {
          x: { display: false }, // Hide x-axis
          y: { display: false }, // Hide y-axis
        },
        plugins: {
          tooltip: {
            enabled: true, // Show tooltip only on hover
            callbacks: {
              title: function (tooltipItems) {
                return `📅 ${tooltipItems[0].label}`; // Show timestamp
              },
              label: function (tooltipItem) {
                return `💰 Price: $${tooltipItem.raw.toFixed(2)}`; // Show price
              },
            },
          },
        },
        interaction: {
          mode: "index",
          intersect: false, // Show tooltip for the closest point
        },
        hover: {
          mode: "index",
          intersect: false,
          axis: "x", // Enable vertical crosshair
        },
        elements: {
          line: {
            borderWidth: 2,
          },
        },
        plugins: {
          crosshair: {
            line: {
              color: "red", // Vertical line color
              width: 2, // Vertical line width
              dashPattern: [5, 5], // Dotted line style
            },
            sync: {
              enabled: false,
            },
            zoom: {
              enabled: false,
            },
          },
        },
      },
    });
    renderstockData(stockSymbol);
  } catch (error) {
    console.error("Error fetching or creating chart:", error);
  }
}

async function renderstockData(stock) {
  try {
    const data = await fetch(
      "https://stocksapi-uhe1.onrender.com/api/stocks/getstocksprofiledata"
    );
    console.log("data fetch");
    if (!data.ok) {
      throw new Error(`HTTP Error:status ${data.ok} `);
    }
    const mdata = await data.json();
    console.log(mdata);
    if (!mdata?.stocksProfileData?.length) {
      alert(`No stock data available for ${stock}`);
      return;
    }
    const renderData = mdata.stocksProfileData[0][stock];
    console.log(renderData);
    if (!renderData) {
      alert("no data to render for", stock);
    }
    const stockProfileData = document.getElementById("details");
    stockProfileData.textContent = renderData.summary;
  } catch (error) {
    console.error("Error for additional data fetching:", error);
  }
}
