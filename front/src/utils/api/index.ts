import instance from "../axios";
import { ICreateTest } from "../models/request";
import { IGetResult, IGetTest } from "../models/response";

export const PostTest = async (body: ICreateTest) => {
  try {
    return await instance.post(`/exam`, body);
  } catch (error) {
    throw error;
  }
};

export const GetResult = async (): Promise<IGetResult> => {
  try {
    return await instance.get(`/exam/result`);
  } catch (error) {
    throw error;
  }
};

export const GetQuestion = async (examId: string): Promise<IGetTest> => {
  try {
    return (await instance.get(`/question?id=${examId}`)).data;
  } catch (error) {
    throw error;
  }
};

export const PostAnswer = async (testId: number, body: number) => {
  try {
    return await instance.post(`/question/${testId}`, body);
  } catch (error) {
    throw error;
  }
};
