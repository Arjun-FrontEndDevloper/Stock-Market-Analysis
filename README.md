<h4>If you have a keen interest in the stock market and want to work on an application where you can have your own portfolio and keep track of its data over different ranges of time. But you want the data to be authentic to perform real-time analysis.</h4>
Here a web Application to show all available stocks in your portfolio and also their data over different ranges of time.
<h4>1. The App has 3 major sections: <br> 
<ul>
    <li>Chart Sectiun</li>
    <li>List Section</li>
    <li>Detail Section</li>
</ul></h4>
<h4>2. The <b>chart</b> section display a chart based on the data fetched by the provided API.</h4>
<h4>3. There are buttons to change the range on which the chart is built.</h4>
<h4>4. Clicking on any of the buttons rerenders the chart according to the value of the button.</h4>
<h4>5. The List section display all the stocks present in the provided stock list, along with details like bookValue and profit.</h4>
<h4>6. Each list item have a click event which changes the content of the chart section to the selected stocks.</h4>
<h4>7. The <b>Details</b> section present below the chart section, and it display the name, profit, and bookValue along with its little summary provided through the API.</h4>
<h4>With an array of stocks that have to be used in this project.</h4>
<h4>The array “Stocks” is :</h4>
 ['AAPL' ,'MSFT' ,'GOOGL' ,'AMZN' ,'PYPL', 'TSLA' ,'JPM' ,'NVDA', 'NFLX', 'DIS'];
<h4>have three different APIs:</h4>
a. To get the charts data use this API:
    <a href="https://stocksapi-uhe1.onrender.com/api/stocks/getstocksdata" target="_blank">https://stocksapi-uhe1.onrender.com/api/stocks/getstocksdata</a>
    
    
b. To get the bookValue and profit, use this API:
    <a href="https://stocksapi-uhe1.onrender.com/api/stocks/getstocksprofiledata" target="_blank">https://stocksapi-uhe1.onrender.com/api/stocks/getstocksprofiledata</a>
    
c. To get the summary of any stock, use this API:
    <a href="https://stocksapi-uhe1.onrender.com/api/stocks/getstockstatsdata" target="_blank">https://stocksapi-uhe1.onrender.com/api/stocks/getstockstatsdata</a>

It render all the stocks given in the array along with their bookValue and profit, and each stock have onclick event, which change the content of the chart and detail section.
the chart section, display the chart, which will be mapped according to the data fetched using the API.
On hovering over the chart, it should display the timestamp on the x-axis, and subsequently, the name and price of the stock at that date should be displayed at the cursor position, as shown in the picture below.
In the chart section only, display the peak value and low value that the stock has achieved over the selected period of time.
<h4>Uses third-party library for plotting the charts </h4>
    Use any third-party library for plotting the charts:
    <code>
- Plotly.js
- D3.js
- ChartJS
</code>
<h4>To convert the timestamp to a particular date, did this:</h4>
<code>new_timestamp = new Date(timestamp * 1000).toLocaleDateString()
</code>
<h4>site may take some time to start. Please wait for some time.</h4>
