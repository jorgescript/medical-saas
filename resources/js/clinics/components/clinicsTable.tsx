import { useState } from "react";
import useModal from "@/hooks/use-modal";
import { ClinicList } from "../interfaces/ClinicLits";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { toast } from "sonner"
import { FilePenLine, Trash } from 'lucide-react';
import { EditClinic } from "@/components/modals/editClinic";


export const ClinicsTable = ({ clinics }: ClinicList) => {
  const [clinicName, setClinicName] = useState('');

  const editModal = useModal();

  const handleEditModal = (clinicName: string) => {
    setClinicName(clinicName)
    editModal.open()
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
                <button onClick={() => handleEditModal(clinic.name)} className=" mr-2">
                  <FilePenLine className="h-5 w-5 text-blue-500" />
                </button>
                <button onClick={() =>
                  toast("Event has been created", {
                    description: "Sunday, December 03, 2023 at 9:00 AM",
                    action: {
                      label: "Undo",
                      onClick: () => console.log("Undo"),
                    },
                  })
                }>
                  <Trash className="h-5 w-5 text-red-500" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <EditClinic isOpen={editModal.isOpen} onClose={editModal.close} name={clinicName} />
    </>
  )
}
