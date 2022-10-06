export interface IGetResult {
  all_question_count: number;
  score: number;
  tendency: string;
  tendency_type: number;
  tendency_explanation: string;
  wrong_sum: number;
}

export interface IGetTest {
  finance_info: {
    dpr: number;
    endDate: string;
    hipr: number;
    id: number;
    lopr: number;
    mrktTotAmt: number;
    trPrc: number;
    trqu: number;
    vs: number;
  };
  id: number;
  image: string;
  news: {
    article: string;
    id: number;
    image: string;
    title: string;
  };
  stock: string;
}

export interface IGetFailTest {
  answer: number;
  end_date: string;
  explanation: string;
  finance_info: {
    dpr: number;
    endDate: string;
    hipr: number;
    id: number;
    lopr: number;
    mrktTotAmt: number;
    trPrc: number;
    trqu: number;
    vs: number;
  };
  id: number;
  image: string;
  news: {
    article: string;
    id: number;
    image: string;
    title: string;
  };
  right_answer: number;
  score: number;
  stock: string;
}
