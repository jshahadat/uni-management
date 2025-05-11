import { Schema, model } from 'mongoose';
import { Student } from './student.interface'; // if you're using separate interface

const studentSchema = new Schema<Student>(
  {
    id: { type: String, required: true, unique: true },
    name: {
      firstName: { type: String, required: true },
      middleName: { type: String, required: true },
      laastName: { type: String, required: true },
    },
    gender: { type: String, enum: ['male', 'female', 'other'], required: true },
    dateofBirth: { type: Date, required: true },
    email: { type: String, required: true, unique: true },
    avatar: { type: String },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      required: true,
    },
    presentAddress: { type: String, required: true },
    permanentAdrerss: { type: String, required: true },
    gurdian: {
      fatherName: { type: String, required: true },
      fatherOccupation: { type: String, required: true },
      fatherContactNo: { type: String, required: true },
      motherName: { type: String, required: true },
      motherOccupation: { type: String, required: true },
      motherContactNo: { type: String, required: true },
    },
    localGurdian: {
      name: { type: String, required: true },
      occupation: { type: String, required: true },
      contactNo: { type: String, required: true },
      address: { type: String, required: true },
    },
    profileImg: { type: String },
    isActive: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active',
    },
  },
  {
    timestamps: true,
  },
);

export const StudentModel = model<Student>('Student', studentSchema);
