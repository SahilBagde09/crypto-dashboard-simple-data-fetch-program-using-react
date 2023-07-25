import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    cryptoData: [],
    loader: true,
  }

  componentDidMount() {
    this.getCryptoDetails()
  }

  getCryptoDetails = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedCryptoData = data.map(eachData => ({
      currencyName: eachData.currency_name,
      usdValue: eachData.usd_value,
      euroValue: eachData.euro_value,
      id: eachData.id,
      currencyLogo: eachData.currency_logo,
    }))
    this.setState({cryptoData: updatedCryptoData, loader: false})
  }

  render() {
    const {cryptoData, loader} = this.state
    return loader ? (
      <div className="loader-container" data-testid="loader">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      <div className="main-content-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="crypto-image"
        />
        <ul className="crypto-table">
          <li className="crypto-table-col-name">
            <p className="type">Coin Type</p>
            <p className="currency-type">USD</p>
            <p className="currency-type">EURO</p>
          </li>
          {cryptoData.map(eachData => (
            <CryptocurrencyItem cryptoData={eachData} key={eachData.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default CryptocurrenciesList
