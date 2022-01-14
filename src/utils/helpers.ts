import { PlateCategory, Product, UserData } from "../types";

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

export function returnStrFromEnumPlateCategory(plateCategory: PlateCategory) {
    switch (plateCategory) {
        case PlateCategory.LOW_CARB:
            return "Low Carb";
        case PlateCategory.TRANS_FATS_FREE:
            return "Sem Gorduras Trans";
        case PlateCategory.LACTOSE_FREE:
            return "Sem Lactose";
        case PlateCategory.HIGH_PROTEIN:
            return "Rico em Proteína";
        case PlateCategory.NO_GLUTEN:
            return "Sem Glúten";
        case PlateCategory.VEGAN:
            return "Vegano";
        case PlateCategory.VEGETARIAN:
            return "Vegetariano";
    }
}

export function returnInitialFromEnumPlateCategory(plateCategory: PlateCategory) {
    switch (plateCategory) {
        case PlateCategory.LOW_CARB:
            return "LC";
        case PlateCategory.TRANS_FATS_FREE:
            return "ST";
        case PlateCategory.LACTOSE_FREE:
            return "SL";
        case PlateCategory.HIGH_PROTEIN:
            return "RP";
        case PlateCategory.NO_GLUTEN:
            return "SG";
        case PlateCategory.VEGAN:
            return "VG";
        case PlateCategory.VEGETARIAN:
            return "VT";
    }
}

export function validateUser(newUser: UserData) {
    
    if (newUser.password == null || newUser.password.length == 0) {
        return "Informe uma senha de mais de 6 dígitos por segurança.";
    }

    return null;

}