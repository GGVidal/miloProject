const treatRequestErrors = (error) => {
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
        message: 'Não foi possível carregar os dados',
      };
  }
  return;
};

export {treatRequestErrors};
