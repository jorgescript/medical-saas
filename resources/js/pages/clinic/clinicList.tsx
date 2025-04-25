import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Mis clinicas',
    href: '/clinicas',
  },
];

interface ClinicListProps {
  clinics: { id: number, name: string }[];
}

export default function ClinicList({ clinics }: ClinicListProps) {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head>
        <title>Mis clinicas</title>
        <meta name="description" content="Mis clinicas" />
        {/* Cambiar favicon */}
      </Head>
      <Table>
        <TableCaption>Mis clinicas</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clinics.map((clinic) => (
            <TableRow key={clinic.id}>
              <TableCell className="font-medium">{clinic.name}</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </AppLayout>
  );
}
