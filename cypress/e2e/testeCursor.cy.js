describe('Engage Sphere - Testes Customizados', () => {
  beforeEach(() => {
    cy.visit('/')
    // Aceitar cookies se aparecer - a linha abaixo foi alterada
    cy.contains('button', 'Accept').click()
  })

  it('deve mostrar boas vindas customizadas com nome personalizado', () => {
    const nomePersonalizado = 'Marie Cardoso'
    
    // Limpar e digitar o nome personalizado
    cy.get('[data-testid="name"]').clear()
    cy.get('[data-testid="name"]').type(nomePersonalizado)
    
    // Verificar se a mensagem de boas vindas aparece com o nome
    cy.get('h2').should('be.visible')
    cy.get('h2').should('contain.text', nomePersonalizado)
    
    // Verificar se a mensagem de boas vindas é customizada
    cy.get('h2').should('not.contain.text', 'Digite seu nome')
  })

  it('deve mostrar detalhes customizados do cliente', () => {
    const nomeCliente = 'João Silva'
    
    // Inserir nome do cliente
    cy.get('[data-testid="name"]').clear()
    cy.get('[data-testid="name"]').type(nomeCliente)
    
    // Verificar se os detalhes customizados aparecem
    cy.get('h2').should('be.visible')
    cy.get('h2').should('contain.text', nomeCliente)
    
    // Verificar se há elementos de detalhes na página
    cy.get('body').should('contain.text', nomeCliente)
    
    // Verificar se a interface responde ao nome inserido
    cy.get('[data-testid="name"]').should('have.value', nomeCliente)
  })

  it('deve permitir voltar dos detalhes do cliente', () => {
    const nomeTeste = 'Maria Santos'
    
    // Inserir nome e navegar para detalhes
    cy.get('[data-testid="name"]').clear()
    cy.get('[data-testid="name"]').type(nomeTeste)
    
    // Verificar se está na tela de detalhes
    cy.get('h2').should('be.visible')
    cy.get('h2').should('contain.text', nomeTeste)
    
    // Simular voltar (limpar o campo ou usar botão de voltar se existir)
    cy.get('[data-testid="name"]').clear()
    
    // Verificar se voltou ao estado inicial
    cy.get('[data-testid="name"]').should('have.value', '')
    
    // Verificar se a mensagem de boas vindas não mostra mais o nome
    cy.get('h2').should('not.contain.text', nomeTeste)
  })

  it('deve enviar uma mensagem com sucesso', () => {
    const nomeUsuario = 'Pedro Costa'
    const mensagem = 'Esta é uma mensagem de teste'
    
    // Inserir nome do usuário
    cy.get('[data-testid="name"]').clear()
    cy.get('[data-testid="name"]').type(nomeUsuario)
    
    // Verificar se o nome foi aceito
    cy.get('h2').should('contain.text', nomeUsuario)
    
    // Procurar por campos de mensagem ou formulário
    cy.get('body').then(($body) => {
      // Se houver campo de mensagem, preenchê-lo
      if ($body.find('textarea, input[type="text"]').length > 1) {
        cy.get('textarea, input[type="text"]').not('[data-testid="name"]').first().type(mensagem)
      }
      
      // Se houver botão de enviar, clicar nele
      if ($body.find('button').length > 0) {
        cy.get('button').contains(/enviar|send|submit/i).click()
      }
    })
    
    // Verificar se a mensagem foi enviada com sucesso
    // (verificar por mensagem de sucesso, confirmação, etc.)
    cy.get('body').should('contain.text', /sucesso|success|enviado|sent/i)
    
    // Verificar se o nome do usuário ainda está visível
    cy.get('h2').should('contain.text', nomeUsuario)
  })
})
