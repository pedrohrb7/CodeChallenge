import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import "./location.css";

const Location = () => {
  const [estados, setEstados] = useState([]);

  const { register, errors, setValue } = useForm({
    defaultValues: {
      state: "",
      city: "",
      cep: "",
      district: "",
      address: "",
    },
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  const validator = {
    cep: {
      required: "Você precisa inserir um CEP válido",
      pattern: {
        value: /\d{5}-\d{3}/,
        message: "Seu CEP precisa estar formatado como 12345-678",
      },
    },
    city: {
      required: "Você precisa inserir o nome de sua cidade",
    },
    state: {
      required: "Você precisa inserir o nome de seu estado",
      validate: (value) => value !== "UF" || "Selecione um estado",
    },
    district: {
      required: "Você precisa inserir o nome de seu bairro",
    },
    address: {
      required: "Você precisa inserir seu endereço",
    },
    number: {
      required: "Você precisa inserir o número de sua residência",
    },
  };

  useEffect(() => {
    setEstados([
      { name: "Alagoas" },
      { name: "Amazonas" },
      { name: "Bahia" },
      { name: "Ceará" },
      { name: "Distrito Federal" },
      { name: "Espírito Santo" },
      { name: "Goiás" },
      { name: "Maranhão" },
      { name: "Mato Grosso" },
      { name: "Mato Grosso do Sul" },
      { name: "Minas Gerais" },
      { name: "Pará" },
      { name: "Paraíba" },
      { name: "Paraná" },
      { name: "Pernambuco" },
      { name: "Rio de Janeiro" },
      { name: "Rio Grande do Norte" },
      { name: "Rio Grande do Sul" },
      { name: "Rondônia" },
      { name: "Roraima" },
      { name: "Santa Catarina" },
      { name: "São Paulo" },
      { name: "Sergipe" },
      { name: "Tocantins" },
    ]);
  }, []);

  function getCep(cep) {
    if (cep.length > 3) {
      cep = cep.replace("-", "");
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => response.json())
        .then((data) => {
          if (!data.erro) {
            setValue("cep", data.cep, { shouldValidate: true });
            setValue("city", data.localidade, { shouldValidate: true });
            setValue("state", data.uf, { shouldValidate: true });
            setValue("district", data.bairro, { shouldValidate: true });
            setValue("address", data.logradouro, { shouldValidate: true });
          }
        });
    }
  }

  const onSubmit = (data) => console.log(data);

  function formatCep(cep) {
    const x = cep.replace(/\D/g, "").match(/(\d{0,5})(\d{0,3})/);
    return !!x[2] ? `${x[1]}-${x[2]}` : !!x[1] ? `${x[1]}` : "";
  }

  return (
    <main>
      <h2 className="main-title">localização</h2>
      <div className="container">
        <div className="container main-content main-content--shadow">
          <div className="row">
            <div className="col-lg-5 col-md-4">
              <div className="title form-aside">
                instruções
                <p className="desc">
                  Preencha seus dados de Localização. <br />
                  Sempre os mantenha atualizado.
                </p>
              </div>
            </div>

            <div className="col-lg-7 col-md-4 form-content">
              <form onSubmit={onSubmit} className="form-content">
                <div className="form-group">
                  <label htmlFor="cep">
                    CEP <span className="asterisk">*</span>
                  </label>
                  <input
                    maxLength="9"
                    name="cep"
                    className="form-control ls-mask-cep"
                    type="text"
                    placeholder="12345-678"
                    required
                    errors={errors.cep}
                    ref={register(validator.cep)}
                    onBlur={(e) => {
                      getCep(e.target.value);
                    }}
                    onChange={(e) => {
                      setValue("cep", formatCep(e.target.value));
                    }}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="city">
                    Cidade <span className="asterisk">*</span>
                  </label>

                  <input
                    name="city"
                    className="form-control"
                    placeholder="Insira sua cidade atual"
                    required
                    errors={errors.city}
                    ref={register(validator.city)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="state">
                    Estado <span className="asterisk">*</span>
                  </label>
                  <select name="state" className="form-control">
                    <option className="option disabled">
                      Selecione seu estado
                    </option>
                    {estados.map((item, index) => {
                      return (
                        <option key={index} className="option">
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="district">
                    Bairro <span className="asterisk">*</span>
                  </label>
                  <input
                    name="district"
                    className="form-control"
                    errors={errors.district}
                    ref={register(validator.district)}
                    placeholder="Insira o nome do seu bairro"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address">
                    Endereço <span className="asterisk">*</span>
                  </label>
                  <input
                    name="address"
                    className="form-control"
                    errors={errors.address}
                    ref={register(validator.address)}
                    placeholder="Insira seu endereço"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="number">
                    Número <span className="asterisk">*</span>
                  </label>
                  <input
                    name="number"
                    className="form-control"
                    errors={errors.number}
                    ref={register(validator.number)}
                    placeholder="Insira o número de sua residencia"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="aDetails">Complemento</label>
                  <input
                    name="aDetails"
                    className="form-control"
                    type="text"
                    placeholder="Insira um complemento, caso necessário"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="form-btn">
          <button className="send-btn" type="submit">
            Enviar
          </button>
        </div>
      </div>
    </main>
  );
};

export default Location;
