import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import InputError from "../input-error";
import { useForm } from "@inertiajs/react";
import { FormEventHandler, useEffect } from 'react';
import { LoaderCircle } from "lucide-react";

interface EditClinicProps {
  isOpen: boolean;
  onClose: () => void;
  clinic: { id: number, name: string }
}

type EditClinicForm = {
  name: string;
};

export const EditClinic = ({ isOpen, onClose, clinic }: EditClinicProps) => {
  const { data, setData, put, processing, errors, reset } = useForm<Required<EditClinicForm>>({
    name: '',
  });

  useEffect(() => {
    setData('name', clinic.name);
  }, [clinic]);

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    put(route('clinics.update', clinic.id), {
      onFinish: () => reset('name'),
      onSuccess: () => onClose(),
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{clinic.name}</DialogTitle>
          <DialogDescription>
            Edita el nombre de la clínica
          </DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-6" onSubmit={submit}>
          <div className="grid gap-6">
            <div className="grid gap-2">
              <Input
                id="name"
                name="name"
                type="text"
                required
                autoFocus
                value={data.name}
                onChange={(e) => setData('name', e.target.value)}
                placeholder="Nombre de la clínica"
              />
              <InputError message={errors.name} />
            </div>
          </div>
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
