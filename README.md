Amőba játék

A fenti kód egy React app, amely egy amőba alkalmazást működtet. Az alkalmazás három oldalból áll, melyet a react-router-dom kezel. Az első oldal egy login felület, melyen bejelentkezve tudunk tovább kerülni a játék elindítása felületre. A felhasználó adatait a localStorage-be menti az alkalmazás. Az új játék felületen egy gombot megnyomva, egy felugró modal segítségével tudjuk megadni a játék alapvető beállításait (játékos nevek, szimbólumok, színek és a háló mérete). Ezt végrehajtva jutunk el a játék oldalára. Az alkalmazás kezeli, hogy ki az aktuális lépő, ha valamelyik játékos győz, az alkalmazás kiírja a nyertes nevét, illetve engedi az újrakezdést, illetve a visszalépést az előző oldalra.

A választásom, azért esett a React keretrendszerre, mivel az általam elképzelt alkalmazás felépítését véleményem szerint ezzel tudtam a legkönnyebben megvalósítani.
Az alkalmazás az npm csomag letöltése után az 'npm start' paranccsal indul.
