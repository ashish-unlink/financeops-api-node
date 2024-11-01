import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateFTPDto {
    @IsNotEmpty({ message: 'First Name is required' })
    fname: string;

    @IsNotEmpty({ message: 'Last Name is required' })
    lname: string;

    @IsEmail({}, { message: 'Invalid Email address' })
    @IsNotEmpty({ message: 'Email is required' })
    email: string;

    /*@IsNotEmpty({ message: 'Phone is required' })
    phone: string*/

    @IsNotEmpty({ message: 'Location is required' })
    location: {
        ip: string;
        country: string
    }
}