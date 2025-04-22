import { Head, useForm } from '@inertiajs/react';

import FirstStepsLayout from '@/layouts/first-steps-layout';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type ClinicForm = {
  name: string;
};

export default function AuthSplitLayout() {

  const { data, setData, post, processing, errors, reset } = useForm<Required<ClinicForm>>({
    name: '',
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    post(route('clinics.store'), {
      onFinish: () => reset('name'),
    });
  };

  return (
    <FirstStepsLayout title="Comenzemos agregando tu primer clinica" description="">
      <Head title="Agregar primer clinica" />

      <form className="flex flex-col gap-6" onSubmit={submit}>
        <div className="grid">
          <div className="grid gap-2">
            <Label htmlFor="name">Nombre de la clinica</Label>
            <Input
              id="name"
              type="text"
              required
              autoFocus
              tabIndex={1}
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
              placeholder="Nombre de la clinica"
            />
            <InputError message={errors.name} />
          </div>

          <div className='grid grid-cols-2'>
            <Button type="button" variant="link" className="mt-4 w-fit cursor-pointer" tabIndex={4} disabled={processing}>
              {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
              Hacerlo despues
            </Button>
            <Button type="submit" className="mt-4 bg-cyan-500 hover:bg-cyan-600 cursor-pointer" tabIndex={4} disabled={processing}>
              {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
              Agregar mi primer clinica
            </Button>
          </div>
        </div>
      </form>
    </FirstStepsLayout>
  );
}
