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
import { FormEventHandler } from 'react';
import { LoaderCircle } from "lucide-react";

interface EditClinicProps {
  isOpen: boolean;
  onClose: () => void;
  name: string
}

type EditClinicForm = {
  name: string;
};

export const EditClinic = ({ isOpen, onClose, name }: EditClinicProps) => {
  const { data, setData, post, processing, errors, reset } = useForm<Required<EditClinicForm>>({
    name: '',
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    post(route('login'), {
      onFinish: () => reset('name'),
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription>
            Edita el nombre de la clínica
          </DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-6" onSubmit={submit}>
          <div className="grid gap-6">
            <div className="grid gap-2">
              <Input
                id="name"
                type="text"
                required
                autoFocus
                value={data.name || name}
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
          <Button type="submit" className="text-white w-full" tabIndex={4} disabled={processing}>
            {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
            Guardar cambios
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
