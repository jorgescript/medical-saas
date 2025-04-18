<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class CreateRolesAndPermissions extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        /* Roles */
        $superAdminRole = Role::create(['name' => 'super-admin']);
        $adminRole = Role::create(['name' => 'admin']);
        $doctorRole = Role::create(['name' => 'doctor']);
        $receptionistsRole = Role::create(['name' => 'receptionist']);

        /* Permissions */
        Permission::create(['name' => 'add clinic']);
        Permission::create(['name' => 'edit clinic']);
        Permission::create(['name' => 'delete clinic']);
        Permission::create(['name' => 'list clinic']);
        Permission::create(['name' => 'add patient']);
        Permission::create(['name' => 'edit patient']);
        Permission::create(['name' => 'delete patient']);
        Permission::create(['name' => 'list patient']);
        Permission::create(['name' => 'add appointment']);
        Permission::create(['name' => 'edit appointment']);
        Permission::create(['name' => 'delete appointment']);
        Permission::create(['name' => 'list appointment']);
        Permission::create(['name' => 'add clinical note']);
        Permission::create(['name' => 'edit clinical note']);
        Permission::create(['name' => 'delete clinical note']);
        Permission::create(['name' => 'list clinical note']);
        Permission::create(['name' => 'add user']);
        Permission::create(['name' => 'edit user']);
        Permission::create(['name' => 'delete user']);
        Permission::create(['name' => 'list user']);


        /* Assign Permissions to Roles */
        $permissions = Permission::all();
        /* Super Admin Permissions */
        $superAdminRole->syncPermissions($permissions);
        /* Admin Permissions */
        $adminRole->syncPermissions($permissions);

        /* Doctor Permissions */
        $doctorRole->givePermissionTo('add patient');
        $doctorRole->givePermissionTo('edit patient');
        $doctorRole->givePermissionTo('delete patient');
        $doctorRole->givePermissionTo('list patient');
        $doctorRole->givePermissionTo('add appointment');
        $doctorRole->givePermissionTo('edit appointment');
        $doctorRole->givePermissionTo('delete appointment');
        $doctorRole->givePermissionTo('list appointment');
        $doctorRole->givePermissionTo('add clinical note');
        $doctorRole->givePermissionTo('edit clinical note');
        $doctorRole->givePermissionTo('delete clinical note');
        $doctorRole->givePermissionTo('list clinical note');

        /* Receptionists Permissions */
        $receptionistsRole->givePermissionTo('add patient');
        $receptionistsRole->givePermissionTo('edit patient');
        $receptionistsRole->givePermissionTo('delete patient');
        $receptionistsRole->givePermissionTo('list patient');
        $receptionistsRole->givePermissionTo('add appointment');
        $receptionistsRole->givePermissionTo('edit appointment');
        $receptionistsRole->givePermissionTo('delete appointment');
        $receptionistsRole->givePermissionTo('list appointment');
        $receptionistsRole->givePermissionTo('add clinical note');
        $receptionistsRole->givePermissionTo('edit clinical note');
        $receptionistsRole->givePermissionTo('delete clinical note');
        $receptionistsRole->givePermissionTo('list clinical note');
    }
}
