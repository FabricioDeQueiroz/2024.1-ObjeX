import React, { useEffect, useState } from 'react'
import NavBarLoginAdmin from '../../components/navbar/navbar-login/NavBarLoginAdmin'
import ErrorAlert from '../../components/alert/error/ErrorAlert';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ALUNO_ENDPOINT } from '../../util/constants';

const AtivarContaAluno = () => {
    const [ senhaAcesso, setSenhaAcesso ] = useState('');
    const [ senha, setSenha ] = useState('');
    const [ confirmarSenha, setConfirmarSenha ] = useState('');
    const [ error, setError ] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
      e.preventDefault();
      if(!senhaAcesso || !senha || !confirmarSenha) {
        console.log(senhaAcesso, senha, confirmarSenha)
        alert('Preencha todos os campos');
        return;
      }
      try {
        const res = await axios.post(`${ALUNO_ENDPOINT}/register/activate`, {
          senha_antiga: senhaAcesso,
          nova_senha: senha,
          matricula: localStorage.getItem('matricula@primeiroAcesso')
        });
        console.log(res);
        setError(false);
        localStorage.removeItem('matricula@primeiroAcesso');
        navigate('/login/aluno');
      } catch(err) {
        setError(true);
        console.log(err);
      }
    }

    useEffect(() => { 
      if(senha !== confirmarSenha) {
        setError(true);
      } else {
        setError(false);
      }
      console.log(error)
    }, [senha, confirmarSenha])

    return (
      <div>
            <NavBarLoginAdmin />
            <div>
                <svg className="absolute bottom-0 z-[-5] inset-y-0 right-0 w-full h-full">
                <ellipse cx="65%" cy="50%" rx="20%" ry="50%" fill="#d8dee9"/>
                <rect x="65%" width="50%" height="100%" fill="#d8dee9"/>
                </svg>
            </div>
            <div className='pl-20 pr-20 pt-[100px] flex items-center justify-center'>
                <div className="card bg-base-100 shadow-2xl">
                    <div className="card-body rounded-t-xl w-full h-[74px] items-center justify-center bg-base-content ">
                        <h2 className='text-2xl font-medium text-base-100'>Primeiro Acesso</h2>
                    </div>
                    <div className="card-body pl-[35px] pt-[35px] rounded-b-xl w-full h-1/4 bg-base-100">
                        <h2>Digite a senha de acesso que você recebeu no seu email e cadastre sua senha definitiva.</h2>
                        <form onSubmit={handleSubmit} className='flex flex-col' >
                        <h2 className='text-xl font-medium text-primary-content mb-2'>Senha de acesso</h2>
                        <label className="input bg-base-300 flex items-center gap-2 ">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-5 w-5 text-primary">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input onChange={e => setSenhaAcesso(e.target.value)} type="text" className="grow pl-2" placeholder="123456789" />
                        </label>
                        <h2 className='text-xl font-medium text-primary-content mb-2 mt-4'>Senha</h2>
                        <label className="input bg-base-300 flex items-center gap-2 ">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-5 w-5 text-primary">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input onChange={e => setSenha(e.target.value)} type="password" className="grow pl-2" placeholder="123456789" />
                        </label>
                        <h2 className='text-xl font-medium text-primary-content mb-2 mt-4'>Confirmar Senha</h2>
                        <label className="input bg-base-300 flex items-center gap-2 ">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-5 w-5 text-primary">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input onChange={e => setConfirmarSenha(e.target.value)} type="password" className="grow pl-2" placeholder="123456789" />
                        </label>
                        <button type='submit' className='btn btn-primary font-medium w-1/2 h-[55px] self-center mt-6'>Cadastrar Senha</button>
                        </form>
                    </div>
                </div> 
            </div>
            <div className='flex items-center justify-center'>
              {error ? <ErrorAlert message={'As senhas não conferem!'} /> : <></>}
            </div>
            
        </div>
    )
}

export default AtivarContaAluno