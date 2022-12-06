/**
 * See https://docs.expo.dev/versions/v47.0.0/sdk/webview/
 */
import Constants from 'expo-constants';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const _js = `
const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];
const data = {
  labels: labels,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
  }]
};        
const config = {
  type: 'line',
  data: data,
  options: {}
};        

const myChart = new Chart(
  document.getElementById('myChart'),
  config,
  data,
);
true; // note: this is required, or you'll sometimes get silent failures
`;
const _html = `
<head>
<meta name="viewport" content="width=device-width, user-scalable=no" />
</head>
<body>
  <div>
    <p>hi</p>
    <canvas id="myChart"></canvas>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</body>
</html>
`;

export default function WebViewScreen() {
  const refWebView = React.useRef<WebView>(null);

  setTimeout(() => {
    const run = `document.body.style.backgroundColor = 'blue';`;
    refWebView.current?.injectJavaScript(run);
  }, 3000);

  return (
    <WebView
      ref={refWebView}
      style={styles.container}
      originWhitelist={['*']}
      // source={{ html: '<h1><center>Hello world</center></h1>' }}
      // source={{ uri: 'https://expo.dev' }}
      source={{ html: _html }}
      injectedJavaScript={_js}
      onMessage={(event) => {
        console.log('[RECV]', event);
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
