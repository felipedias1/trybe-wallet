/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
/* import PropTypes from 'prop-types';
import { connect } from 'react-redux'; */

class Form extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="expense">
          Valor
          <input
            type="text"
            id="expense"
            name="expense"
            /* onChange={ this.handleButton } */
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            id="description"
            name="description"
            /* onChange={ this.handleButton } */
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select name="currency" id="currency">
            <option value="valor1">Valor 1</option>
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select name="payment" id="payment">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="Tag">
          Tag
          <select name="Tag" id="Tag">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

export default Form;
