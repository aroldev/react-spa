import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
      <h1>About page</h1>
      <p>Name: {this.props.name}!</p>

      <p>Lorem ipsum dolor sit amet, ad pri semper lobortis deterruisset. Omnium
      consetetur sea et, has an hinc recteque. Meis falli elaboraret at quo, nam
      ex accusamus vulputate voluptaria. Vix mentitum detraxit et, vivendum tincidunt
      ut eum, ei tale alterum mel. Ad sed mnesarchum vituperata interpretaris,
      eu mea dolor conceptam.
      </p>

      <p>
      At illud invidunt nam, et quidam legimus interpretaris ius. Vim id civibus
      euripidis, te integre impedit corrumpit vix. Eros ullum timeam vel ut, et
      per illud ponderum. Eu nec probo simul scribentur. Sea nostro indoctum
      complectitur ad, vix invenire periculis scripserit id, id quot vitae pri.
      </p>
      </div>
    );
  }
}


class Person extends Component {
  render() {
    return (
      <div class="wrapper">
          <About name='John Doe' />
          </div>
    );
  }
}

export default Person;
