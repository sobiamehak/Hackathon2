export interface Product {
  imageUrl: string ;
    _id : string;
     title :string;
    type: "products";
    image : {
        asset:{
            _ref:string;
            _type : "image";


        }
    };

    price:number ;
    description: string;

    slug :{
        _type : "slug";
        current : string
    }
    inventory: number 

}