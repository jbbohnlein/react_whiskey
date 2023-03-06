import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from '../api/server'
import { useDispatch, useStore } from 'react-redux';
import { chooseName, chooseDistiller, chooseCountry, chooseType } from "../redux/slices/RootSlice";

// interfaces

interface WhiskeyFormProps {
  id?: string[]
}

const WhiskeyForm = (props:WhiskeyFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.name } ${ props.id }`);
      setTimeout(() => {window.location.reload()}, 500);
      event.target.reset();
    } else {
      // Use dispatch to update our state in our store
      dispatch(chooseName(data.name));
      dispatch(chooseDistiller(data.distiller));
      dispatch(chooseType(data.type));
      dispatch(chooseCountry(data.country));

      server_calls.create(store.getState());
      setTimeout( () => {window.location.reload()}, 500);
    }
    
  }

  return (


    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Whiskey Name</label>
          <Input {...register('name')} name='name' placeholder="Name"/>
        </div>
        <div>
          <label htmlFor="distiller">Distiller</label>
          <Input {...register('distiller')} name='distiller' placeholder="Distiller"/>
        </div>
        <div>
          <label htmlFor="type">Type</label>
          <Input {...register('type')} name='type' placeholder="Type"/>
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <Input {...register('country')} name='country' placeholder="Country"/>
        </div>
        <div className="flex p-1">
          <Button
            className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
            >
              Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default WhiskeyForm