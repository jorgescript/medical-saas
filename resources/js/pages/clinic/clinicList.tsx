import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
];

interface ClinicListProps {
  clinics: { id: number, name: string }[];
}

export default function ClinicList({ clinics }: ClinicListProps) {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Mis clinicas" />
      <div>
        {clinics.map((clinic) => (
          <div key={clinic.id}>
            <p>{clinic.name}</p>
          </div>
        ))}
      </div>
    </AppLayout>
  );
}
