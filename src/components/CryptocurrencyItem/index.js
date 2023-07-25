import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoData} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = cryptoData

  return (
    <li className="crypto-data-container">
      <div className="crypto-name-img-container">
        <img
          src={currencyLogo}
          alt={currencyName}
          className="crypto-coin-image"
        />
        <p className="crypto-name">{currencyName}</p>
      </div>
      <p className="currency-rate">{usdValue}</p>
      <p className="currency-rate">{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
