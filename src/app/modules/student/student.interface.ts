export type UserName = {
  firstName: string;
  middleName: string;
  laastName: string;
};
export type Gurdian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type LocalGurdian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female' | 'other';
  dateofBirth: Date;
  email: string;
  avatar?: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAdrerss: string;
  gurdian: Gurdian;
  localGurdian: LocalGurdian;
  profileImg?: string;
  isActive: 'active' | 'inactive';
};
