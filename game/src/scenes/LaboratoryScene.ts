import Phaser from "phaser";
import { DialogBox } from "../ui/DialogBox";

export class LaboratoryScene extends Phaser.Scene {
  private dialog!: DialogBox;

  constructor() {
    super("LaboratoryScene");
  }

  create(): void {
    this.drawLaboratory();
    this.dialog = new DialogBox(this);

    this.createHotspot({
      x: 110,
      y: 180,
      width: 145,
      height: 205,
      label: "ARMÁRIO",
      speaker: "Prof. Helena",
      message:
        "Claudinho, procure materiais no armário. Precisamos encontrar um reagente para nosso experimento.",
    });

    this.createHotspot({
      x: 360,
      y: 260,
      width: 310,
      height: 160,
      label: "BANCADA",
      speaker: "Prof. Helena",
      message:
        "Esta bancada será o centro dos nossos experimentos. Primeiro precisamos preparar nossos materiais.",
    });

    this.createHotspot({
      x: 735,
      y: 220,
      width: 140,
      height: 130,
      label: "COMPUTADOR",
      speaker: "Sistema",
      message:
        "Terminal de pesquisa disponível. Talvez existam informações importantes para nossa missão.",
    });

    this.add
      .text(24, 20, "AGENTIC ENGINEERING WORKSHOP", {
        fontFamily: "monospace",
        fontSize: "18px",
        color: "#ffffff",
        backgroundColor: "#17202b",
        padding: { x: 10, y: 8 },
      })
      .setDepth(20);

    this.add
      .text(480, 375, "Clique nos objetos para explorar", {
        fontFamily: "monospace",
        fontSize: "14px",
        color: "#ffffff",
        backgroundColor: "#17202b",
        padding: { x: 8, y: 5 },
      })
      .setOrigin(0.5)
      .setDepth(20);

    this.input.keyboard?.on("keydown-ESC", () => this.dialog.hide());
  }

  private drawLaboratory(): void {
    const graphics = this.add.graphics();

    // Parede e piso.
    graphics.fillStyle(0x536d7a).fillRect(0, 0, 960, 390);
    graphics.fillStyle(0x554b43).fillRect(0, 390, 960, 150);
    graphics.fillStyle(0xb18b63).fillRect(0, 386, 960, 8);

    // Janela.
    graphics.fillStyle(0x253c50).fillRect(350, 65, 220, 150);
    graphics.fillStyle(0x8cc7d8).fillRect(360, 75, 200, 130);
    graphics.fillStyle(0x253c50);
    graphics.fillRect(455, 75, 8, 130);
    graphics.fillRect(360, 135, 200, 8);

    // Armário.
    graphics.fillStyle(0x754e35).fillRect(110, 180, 145, 205);
    graphics.fillStyle(0xc49a63).fillRect(120, 190, 125, 185);
    graphics.fillStyle(0x754e35).fillRect(178, 190, 5, 185);
    graphics.fillStyle(0xf1d49b);
    graphics.fillRect(165, 275, 8, 8);
    graphics.fillRect(190, 275, 8, 8);

    // Bancada e frasco.
    graphics.fillStyle(0x77553c).fillRect(360, 300, 310, 30);
    graphics.fillStyle(0x9d7958).fillRect(370, 330, 290, 90);
    graphics.fillStyle(0x49372e);
    graphics.fillRect(390, 420, 25, 70);
    graphics.fillRect(615, 420, 25, 70);
    graphics.fillStyle(0x9cdce8).fillRect(455, 260, 32, 40);
    graphics.fillStyle(0xe2c47b).fillRect(463, 245, 16, 15);

    // Computador.
    graphics.fillStyle(0x303b4a).fillRect(735, 220, 140, 105);
    graphics.fillStyle(0x72c6ce).fillRect(745, 230, 120, 80);
    graphics.fillStyle(0x303b4a);
    graphics.fillRect(795, 325, 20, 25);
    graphics.fillRect(770, 350, 70, 8);
    graphics.fillStyle(0x77553c).fillRect(700, 355, 220, 22);
  }

  private createHotspot(options: {
    x: number;
    y: number;
    width: number;
    height: number;
    label: string;
    speaker: string;
    message: string;
  }): void {
    const { x, y, width, height, label, speaker, message } = options;

    const highlight = this.add
      .rectangle(x + width / 2, y + height / 2, width, height)
      .setStrokeStyle(3, 0xffdf70)
      .setFillStyle(0xffdf70, 0.12)
      .setVisible(false)
      .setDepth(10);

    const zone = this.add
      .zone(x + width / 2, y + height / 2, width, height)
      .setInteractive({ useHandCursor: true })
      .setDepth(11);

    zone.on("pointerover", () => highlight.setVisible(true));
    zone.on("pointerout", () => highlight.setVisible(false));
    zone.on("pointerdown", () => {
      if (!this.dialog.isOpen) {
        this.dialog.show(speaker, message);
      }
    });

    this.add
      .text(x + width / 2, y + height + 8, label, {
        fontFamily: "monospace",
        fontSize: "12px",
        color: "#ffffff",
        backgroundColor: "#17202b",
        padding: { x: 5, y: 4 },
      })
      .setOrigin(0.5)
      .setDepth(20);
  }
}
