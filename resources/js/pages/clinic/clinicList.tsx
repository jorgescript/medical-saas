import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { ClinicsTable } from '../../clinics/components/clinicsTable';
import { ClinicList as ClinicListInterface } from '../../clinics/interfaces/ClinicLits';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Mis clinicas',
    href: '/clinicas',
  },
];



export default function ClinicList({ clinics }: ClinicListInterface) {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head>
        <title>Mis clinicas</title>
        <meta name="description" content="Mis clinicas" />
        {/* Cambiar favicon */}
      </Head>
      <ClinicsTable clinics={clinics} />
    </AppLayout>
  );
}
