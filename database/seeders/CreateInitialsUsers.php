<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class CreateInitialsUsers extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $superAdmin = User::create([
            'name' => 'Super Admin',
            'email' => 'superadmin@medicalsass.com',
            'password' => Hash::make('password'),
        ]);

        $superAdmin->assignRole('super-admin');

        $admin = User::create([
            'name' => 'Admin',
            'email' => 'admin@medicalsass.com',
            'password' => Hash::make('password'),
        ]);

        $admin->assignRole('admin');

        $doctor = User::create([
            'name' => 'Doctor',
            'email' => 'doctor@medicalsass.com',
            'password' => Hash::make('password'),
        ]);

        $doctor->assignRole('doctor');

        $receptionist = User::create([
            'name' => 'Receptionist',
            'email' => 'receptionist@medicalsass.com',
            'password' => Hash::make('password'),
        ]);

        $receptionist->assignRole('receptionist');
    }
}
