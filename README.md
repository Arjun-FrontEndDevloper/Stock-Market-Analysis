<h4 id="you-have-a-keen-interest-in-the-stock-market-and-want-to-work-on-an-application-where-you-can-have-your-own-portfolio-and-keep-track-of-its-data-over-different-ranges-of-time-but-you-want-the-data-to-be-authentic-to-perform-real-time-analysis">You have a keen interest in the stock market and want to work on an application where you can have your own portfolio and keep track of its data over different ranges of time. But you want the data to be authentic to perform real-time analysis.</h4>
Create a web Application to show all available stocks in your portfolio and also their data over different ranges of time.
<h4 id="1-the-app-must-have-3-major-sections">1. The App must have 3 major sections:</h4>
<h4 id="2-the-chart-section-should-display-a-chart-based-on-the-data-fetched-by-the-provided-api">2. The <b>chart</b> section should display a chart based on the data fetched by the provided API.</h4>
<h4 id="3-there-should-be-buttons-to-change-the-range-on-which-the-chart-is-built">3. There should be buttons to change the range on which the chart is built.</h4>
<h4 id="4-clicking-on-any-of-the-buttons-should-rerender-the-chart-according-to-the-value-of-the-button">4. Clicking on any of the buttons should rerender the chart according to the value of the button.</h4>
<h4 id="5-the-list-section-should-display-all-the-stocks-present-in-the-provided-stock-list-along-with-details-like-bookvalue-and-profit">5. The List section should display all the stocks present in the provided stock list, along with details like bookValue and profit.</h4>
<h4 id="6-each-list-item-should-have-a-click-event-which-should-change-the-content-of-the-chart-section-to-the-selected-stocks">6. Each list item should have a click event which should change the content of the chart section to the selected stocks.</h4>
<h4 id="7-it-should-be-displayed-on-the-right-side-of-the-page-beside-the-chart-section">7. It should be displayed on the right side of the page beside the chart section.</h4>
<h4 id="8-the-details-section-should-be-present-below-the-chart-section-and-it-should-display-the-name-profit-and-bookvalue-along-with-its-little-summary-provided-through-the-api">8. The <b>Details</b> section should be present below the chart section, and it should display the name, profit, and bookValue along with its little summary provided through the API.</h4>
<h4 id="you-are-given-an-array-of-stocks-that-have-to-be-used-in-this-project">You are given an array of stocks that have to be used in this project.</h4>
<h4 id="the-array-stocks-is">The array “Stocks” is :</h4>
const Stocks = ['AAPL' ,'MSFT' ,'GOOGL' ,'AMZN' ,'PYPL', 'TSLA' ,'JPM' ,'NVDA', 'NFLX', 'DIS'];
<h4 id="you-are-provided-with-three-different-apis">You are provided with three different APIs:</h4>
    a. To get the charts data use this API:
    <a href="https://stocksapi-uhe1.onrender.com/api/stocks/getstocksdata" target="_blank">https://stocksapi-uhe1.onrender.com/api/stocks/getstocksdata</a>
    
    b. To get the bookValue and profit, use this API:

    <a href="https://stocksapi-uhe1.onrender.com/api/stocks/getstocksprofiledata" target="_blank">https://stocksapi-uhe1.onrender.com/api/stocks/getstocksprofiledata</a>
    
    c. To get the summary of any stock, use this API:
    <a href="https://stocksapi-uhe1.onrender.com/api/stocks/getstockstatsdata" target="_blank">https://stocksapi-uhe1.onrender.com/api/stocks/getstockstatsdata</a>

    Render all the stocks given in the array along with their bookValue and profit, and each stock should have onclick event, which should change the content of the chart and detail section.
    For the chart section, display the chart, which should be mapped according to the data fetched using the API.
    On hovering over the chart, it should display the timestamp on the x-axis, and subsequently, the name and price of the stock at that date should be displayed at the cursor position, as shown in the picture below.
    In the chart section only, display the peak value and low value that the stock has achieved over the selected period of time.
    <h4 id="use-any-third-party-library-for-plotting-the-charts-or-can-use-plain-javascript-and-css-to-plot-the-graph-like">Use any third-party library for plotting the charts or can use plain javascript and CSS to plot the graph like:</h4>
    Use any third-party library for plotting the charts or can use plain javascript and CSS to plot the graph like:
    <code>- Plotly.js
- D3.js
- ChartJS
</code>
<h4 id="to-convert-the-timestamp-to-a-particular-date-do-this">To convert the timestamp to a particular date, do this:</h4>
<code>new_timestamp = new Date(timestamp * 1000).toLocaleDateString()
</code>
<h4 id="the-demo-site-may-take-some-time-to-start-please-wait-for-some-time">The demo site may take some time to start. Please wait for some time.</h4>
