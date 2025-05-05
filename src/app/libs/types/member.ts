import { MemberProvider } from "../enums/member.enum";

export interface MemberInput {
  _id: string;
  memberImage?: string;
  memberEmail?: string;
  memberNickname?: string;
  memberPassword?: any;
  provider: MemberProvider;
  providerId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Member {
  _id: string;
  memberEmail?: string;
  memberNickname?: string;
  memberPassword?: string;
  memberImage?: string;
  provider: MemberProvider;
  providerId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MemberUpdateInput {
  _id: string;
  memberImage?: string;
  memberEmail?: string;
  memberNickname?: string;
  memberPassword?: any;
  provider: MemberProvider;
  providerId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface LoginInput {
  memberEmail: string;
  memberPassword: string;
}
