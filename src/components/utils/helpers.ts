import { Product } from "../../types";

export function checkIsSelected(selectedProducts: Product[], product: Product) { 
  return selectedProducts.some(item => item.id === product.id);
}

export function formatPrice(price: number) {

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  return formatter.format(price);
}

export function validateOrder(total: number, address: string) { 
  let validation: string = '';

  if (total === 0 || total === undefined) {
    validation = 'Nenhum Produto Informado!'
    return validation;
  }

  else if (address === null || address === undefined) {
    validation = 'Nenhum Endereço Informado!'
    return validation;
  }

  return validation;
}