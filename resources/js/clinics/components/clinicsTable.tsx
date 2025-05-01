import { useState } from "react";
import useModal from "@/hooks/use-modal";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { FilePenLine, ShieldX, ShieldCheck } from 'lucide-react';
import { EditClinic } from "@/components/modals/editClinic";
import { Clinic } from "../interfaces/Clinic";
import { ChangeStatusClinic } from "@/components/modals/changeStatusClinic";

interface ClinicsTableProps {
  clinics: Clinic[];
}

export const ClinicsTable = ({ clinics }: ClinicsTableProps) => {
  const [clinic, setClinic] = useState({ id: 0, name: "", status: 0 });

  const editModal = useModal();
  const deleteModal = useModal();

  const handleEditModal = (clinic: Clinic) => {
    setClinic(clinic)
    editModal.open()
  }

  const handleDeleteModal = (clinic: Clinic) => {
    setClinic(clinic)
    deleteModal.open()
  }

  return (
    <>
      <Table>
        <TableCaption>Mis clinicas</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Estatus</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clinics.map((clinic) => (
            <TableRow key={clinic.id}>
              <TableCell>{clinic.name}</TableCell>
              <TableCell>Activa</TableCell>
              <TableCell>
                <button onClick={() => handleEditModal(clinic)} className=" mr-2" disabled={clinic.status === 0} title="Editar clinica">
                  <FilePenLine className={`h-5 w-5 ${clinic.status === 0 ? 'text-gray-500' : 'text-blue-500'}`} />
                </button>
                <button title="Cambiar estatus" onClick={() => handleDeleteModal(clinic)}>
                  {clinic.status === 1 ? (
                    <ShieldCheck className="h-5 w-5 text-green-500" />
                  ) : (
                    <ShieldX className="h-5 w-5 text-red-500" />
                  )}
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table >
      <EditClinic isOpen={editModal.isOpen} onClose={editModal.close} clinic={clinic} />
      <ChangeStatusClinic isOpen={deleteModal.isOpen} onClose={deleteModal.close} clinic={clinic} />
    </>
  )
}
