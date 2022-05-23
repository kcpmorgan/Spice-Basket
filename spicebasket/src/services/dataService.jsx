var catalog = [
    {
        _id: "1s1001",
        price: 8.00,
        stock: 10,
        title: "Cinnamon",
        image: "Cinnamon.jpeg",
        discount: 0,
        category: "Spices",
      },
      {
        _id: "1s1002",
        price: 10.00,
        stock: 20,
        title: "Nutmeg",
        image: "Nutmeg.png",
        discount: 0,
        category: "Spices",
      },
      {
        _id: "1s1003",
        price: 16.0,
        stock: 20,
        title: "Clove",
        image: "Cloves.jpeg",
        discount: 0,
        category: "Spices",
      },
      {
        _id: "1s1004",
        price: 10.0,
        stock: 20,
        title: "Tumeric",
        image: "Tumeric.jpeg",
        discount: 0,
        category: "Spices",
      },
      {
        _id: "1s1005",
        price: 16.0,
        stock: 20,
        title: "Bay Leaf",
        image: "Bay Leaf.webp",
        discount: 0,
        category: "Spices",
      },
      {
        _id: "1s1006",
        price: 14.0,
        stock: 20,
        title: "Ginger",
        image: "Ginger.jpeg",
        discount: 0,
        category: "Spices",
      },
      {
        _id: "1s1007",
        price: 32.0,
        stock: 20,
        title: "Allspice",
        image: "Allspice.jpeg",
        discount: 0,
        category: "Spices",
      },
      {
        _id: "1s1008",
        price: 37.0,
        stock: 20,
        title: "Mace",
        image: "Mace.webp",
        discount: 0,
        category: "Spices",
      },
      {
        _id: "1s1009",
        price: 40.0,
        stock: 20,
        title: "Vanilla",
        image: "Vanilla.jpeg",
        discount: 0,
        category: "Spices",
      },
      {
        _id: "1s1010",
        price: 25.0,
        stock: 20,
        title: "Anise",
        image: "Anise.jpeg",
        discount: 0,
        category: "Spices",
      }
    ];

    class Dataservice{
      getCatalog(){
        //Inst to retrieve from the actual server

        return catalog;
      }
    }
export default Dataservice;