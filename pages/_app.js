import './styles.css';

export function reportWebVitals(metric) {
  console.info(metric);
};

const App = props => {
  const { Component, pageProps } = props;
  return (
    <Component {...pageProps} />
  );
};

export default App;