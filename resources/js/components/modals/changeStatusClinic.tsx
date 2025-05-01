import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useForm } from "@inertiajs/react";
import { FormEventHandler, useEffect } from 'react';
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { Clinic } from "@/clinics/interfaces/Clinic";
import InputError from "../input-error";

interface ChangeStatusClinicProps {
  isOpen: boolean;
  onClose: () => void;
  clinic: Clinic
}

type ChangeStatusClinicForm = {
  status: number;
};

export const ChangeStatusClinic = ({ isOpen, onClose, clinic }: ChangeStatusClinicProps) => {
  const { data, setData, put, processing, errors, reset } = useForm<Required<ChangeStatusClinicForm>>({
    status: clinic.status,
  });

  useEffect(() => {
    setData('status', clinic.status == 1 ? 0 : 1);
  }, [clinic]);

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    put(route('clinics.update-status', clinic.id), {
      onSuccess: () => {
        toast("Estatus cambiado exitosamente", {
          description: "El estatus de la clínica se ha cambiado exitosamente",
        })
        onClose();
      },
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{clinic.name}</DialogTitle>
          <DialogDescription>
            ¿{clinic.status === 1 ? 'Quieres cambiar el estatus de la clínica a Inactivo' : 'Quieres cambiar el estatus de la clínica a Activo'}?
          </DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-6" onSubmit={submit}>
          <input hidden name="status" value={data.status} readOnly />
          <InputError message={errors.status} />
        </form>
        <DialogFooter>
          <Button type="button" variant="secondary" onClick={onClose}>
            Cancelar
          </Button>
          <Button type="button" onClick={submit} className="text-white w-full" tabIndex={4} disabled={processing}>
            {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
            Guardar cambios
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
