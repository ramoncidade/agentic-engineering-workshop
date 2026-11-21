import Phaser from "phaser";

export class DialogBox {
  private readonly container: Phaser.GameObjects.Container;
  private readonly speakerText: Phaser.GameObjects.Text;
  private readonly messageText: Phaser.GameObjects.Text;

  constructor(scene: Phaser.Scene) {
    const panel = scene.add
      .rectangle(480, 465, 920, 130, 0x17202b)
      .setStrokeStyle(4, 0xe8bd72);

    this.speakerText = scene.add.text(45, 410, "", {
      fontFamily: "monospace",
      fontSize: "18px",
      color: "#f5c76b",
      fontStyle: "bold",
    });

    this.messageText = scene.add.text(45, 440, "", {
      fontFamily: "monospace",
      fontSize: "16px",
      color: "#ffffff",
      wordWrap: { width: 790 },
      lineSpacing: 6,
    });

    const button = scene.add
      .rectangle(865, 510, 120, 34, 0x416b91)
      .setInteractive({ useHandCursor: true });

    const buttonText = scene.add
      .text(865, 510, "FECHAR", {
        fontFamily: "monospace",
        fontSize: "12px",
        color: "#ffffff",
      })
      .setOrigin(0.5);

    button.on("pointerdown", () => this.hide());

    this.container = scene.add
      .container(0, 0, [
        panel,
        this.speakerText,
        this.messageText,
        button,
        buttonText,
      ])
      .setDepth(100)
      .setScrollFactor(0)
      .setVisible(false);
  }

  show(speaker: string, message: string): void {
    this.speakerText.setText(speaker);
    this.messageText.setText(message);
    this.container.setVisible(true);
  }

  hide(): void {
    this.container.setVisible(false);
  }

  get isOpen(): boolean {
    return this.container.visible;
  }
}
