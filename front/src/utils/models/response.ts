export interface IGetResult {
  age: number;
  all_question_count: number;
  created_at: string;
  name: string;
  questions: [
    {
      answer: number;
      explanation: string;
      id: number;
      news: {
        article: string;
        id: number;
        image: string;
        title: string;
      };
      right_answer: number;
    }
  ];
  score: number;
  tendency: string;
  tendency_explanation: string;
}

export interface IGetTest {
  id: number;
  image: string;
  news: {
    article: string;
    id: number;
    image: string;
    title: string;
  };
}
