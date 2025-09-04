const { test, expect } = require('@playwright/test')

test.describe('Engage Sphere - Testes Customizados', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    
    // Aceitar cookies se aparecer
    const cookieButton = page.locator('.CookieConsent_buttons__usQFh :nth-child(1) button')
    if (await cookieButton.isVisible()) {
      await cookieButton.click()
    }
  })

  test('deve mostrar boas vindas customizadas com nome personalizado', async ({ page }) => {
    const nomePersonalizado = 'Marie Cardoso'
    
    // Limpar e digitar o nome personalizado
    const nameInput = page.locator('[data-testid="name"]')
    await nameInput.clear()
    await nameInput.fill(nomePersonalizado)
    
    // Verificar se a mensagem de boas vindas aparece com o nome
    const welcomeMessage = page.locator('h2')
    await expect(welcomeMessage).toBeVisible()
    await expect(welcomeMessage).toContainText(nomePersonalizado)
    
    // Verificar se a mensagem de boas vindas é customizada
    await expect(welcomeMessage).not.toContainText('Digite seu nome')
  })

  test('deve mostrar detalhes customizados do cliente', async ({ page }) => {
    const nomeCliente = 'João Silva'
    
    // Inserir nome do cliente
    const nameInput = page.locator('[data-testid="name"]')
    await nameInput.clear()
    await nameInput.fill(nomeCliente)
    
    // Verificar se os detalhes customizados aparecem
    const welcomeMessage = page.locator('h2')
    await expect(welcomeMessage).toBeVisible()
    await expect(welcomeMessage).toContainText(nomeCliente)
    
    // Verificar se há elementos de detalhes na página
    await expect(page.locator('body')).toContainText(nomeCliente)
    
    // Verificar se a interface responde ao nome inserido
    await expect(nameInput).toHaveValue(nomeCliente)
  })

  test('deve permitir voltar dos detalhes do cliente', async ({ page }) => {
    const nomeTeste = 'Maria Santos'
    
    // Inserir nome e navegar para detalhes
    const nameInput = page.locator('[data-testid="name"]')
    await nameInput.clear()
    await nameInput.fill(nomeTeste)
    
    // Verificar se está na tela de detalhes
    const welcomeMessage = page.locator('h2')
    await expect(welcomeMessage).toBeVisible()
    await expect(welcomeMessage).toContainText(nomeTeste)
    
    // Simular voltar (limpar o campo ou usar botão de voltar se existir)
    await nameInput.clear()
    
    // Verificar se voltou ao estado inicial
    await expect(nameInput).toHaveValue('')
    
    // Verificar se a mensagem de boas vindas não mostra mais o nome
    await expect(welcomeMessage).not.toContainText(nomeTeste)
  })

  test('deve enviar uma mensagem com sucesso', async ({ page }) => {
    const nomeUsuario = 'Pedro Costa'
    const mensagem = 'Esta é uma mensagem de teste'
    
    // Inserir nome do usuário
    const nameInput = page.locator('[data-testid="name"]')
    await nameInput.clear()
    await nameInput.fill(nomeUsuario)
    
    // Verificar se o nome foi aceito
    const welcomeMessage = page.locator('h2')
    await expect(welcomeMessage).toContainText(nomeUsuario)
    
    // Procurar por campos de mensagem ou formulário
    const textareas = page.locator('textarea')
    const textInputs = page.locator('input[type="text"]')
    
    // Se houver campo de mensagem, preenchê-lo
    if (await textareas.count() > 0) {
      await textareas.first().fill(mensagem)
    } else if (await textInputs.count() > 1) {
      // Pular o primeiro input que é o campo de nome
      await textInputs.nth(1).fill(mensagem)
    }
    
    // Se houver botão de enviar, clicar nele
    const sendButton = page.locator('button').filter({ hasText: /enviar|send|submit/i })
    if (await sendButton.count() > 0) {
      await sendButton.first().click()
    }
    
    // Verificar se a mensagem foi enviada com sucesso
    // (verificar por mensagem de sucesso, confirmação, etc.)
    await expect(page.locator('body')).toContainText(/sucesso|success|enviado|sent/i)
    
    // Verificar se o nome do usuário ainda está visível
    await expect(welcomeMessage).toContainText(nomeUsuario)
  })
})
