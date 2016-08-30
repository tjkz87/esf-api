class InvoiceList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>InvoiceList:</h3>
        <ul>
          {this.props.invoices.map((item) => (<li key={item.invoiceId}>{item.registrationNumber}</li>))}
        </ul>
      </div>
    );
  }
}

window.InvoiceList = InvoiceList;