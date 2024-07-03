// types/battlePass.ts
export interface BattlePass {
  _id: string;
  text: string;
  price: number;
  image: string;
  icon: string;
  recompense1: string;
  recompense2: string;
  recompense3: string;
  recompense4: string;
  [key: string]: any; 
  Defis_img1: string;
  Defis_img2: string;
  Defis_text1: string;
  Defis_text2: string;
  }
  export interface BattlePassDetails {
    _id: string;
    text: string;
    image: string;
    price: number;
    description: string;
  }