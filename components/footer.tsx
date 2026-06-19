const FooterSkinBoxd = () => {
  return (
    <footer>
      <div className="w-full sm:h-[260px] bg-black/90 flex flex-col sm:justify-between sm:items-center border-0 sm:flex-row pt-15 px-5">
        {/* esquerda */}
        <div className="flex flex-col sm:ml-12 mx-6 pb-10  pr-2">
          <h3 className="uppercase text-[#CC0003] font-extrabold text-2xl pb-2.5 font-syne">
            SKINBOXD
          </h3>
          <p className="text-[12px] text-[#ADAAAA] uppercase font-lexend-exa">
            Criado por @sergiosaruijr
          </p>
        </div>
        <div className="grid grid-cols-2 sm:w-[400px] justify-between sm:mr-12 mx-6 uppercase gap-y-5 font-bold sm:text-[14px] font-lexend-exa text-[12px] pt-5 pb-12 ">
          {/* Coluna 1 (Legal) - Fica na esquerda */}
          <div className="flex flex-col gap-y-5">
            <p className="text-[#CC0003] ">Legal</p>
            <a
              href="/politicaDePrivacidade"
              className="text-[#ADAAAA] hover:text-[#CC0003]/90"
            >
              Política de Privacidade
            </a>
            <a
              href="/termosDeUso"
              className="text-[#ADAAAA] hover:text-[#CC0003]"
            >
              termos de uso
            </a>
          </div>

          {/* Coluna 2 (Social) - Alinhada ao final (direita) */}
          <div className="flex flex-col gap-y-5 items-end">
            <p className="text-[#CC0003] ">Social</p>
            <a href="/linkedln" className="text-[#ADAAAA] hover:text-[#CC0003]">
              Linkedln
            </a>
            <a
              href="/instagram"
              className="text-[#ADAAAA] hover:text-[#CC0003]"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSkinBoxd;
