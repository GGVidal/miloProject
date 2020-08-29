const treatRequestErrors = (error) => {
  console.log(error.response.status);
  if (error.message === 'Network Error') {
    return {
      title: 'Problemas de conexão',
      message: 'Por favor, verifique se você possui acesso a internet',
    };
  }
  switch (error.response.status) {
    case 404:
      return {
        title: 'Serviço não encontrado',
        message: 'Não foi possível localizar o serviço solicitado',
      };
  }
  return;
};

export {treatRequestErrors};
