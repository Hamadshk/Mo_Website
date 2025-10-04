#!/usr/bin/env python3
import os
import sys
import time
import math

class TechAnimation:
    def __init__(self):
        self.companies = [
            "OpenAI", "N8N", "VAPI", "Zapier", "Anthropic", "Claude", "Meta", "Google",
            "Microsoft", "Perplexity", "Artificial Intelligence"
        ]
        self.width = 80
        self.center = self.width // 2
        self.animation_speed = 0.08
        self.word_display_time = 3.0

    def clear_screen(self):
        os.system('clear' if os.name == 'posix' else 'cls')

    def get_gradient_char(self, position, word_length, frame):
        word_center = self.center
        char_pos = word_center - word_length // 2 + position

        distance_from_center = abs(char_pos - self.center)
        max_distance = self.width // 3

        if distance_from_center > max_distance:
            return ' '

        intensity = 1 - (distance_from_center / max_distance)
        intensity = max(0, min(1, intensity))

        gradient_chars = [' ', '░', '▒', '▓', '█']
        gradient_index = int(intensity * (len(gradient_chars) - 1))

        return gradient_chars[gradient_index]

    def create_sliding_effect(self, word, frame_offset):
        frames = []
        total_frames = int(self.word_display_time / self.animation_speed)

        for frame in range(total_frames):
            progress = frame / total_frames

            line = [' '] * self.width

            slide_progress = (progress * 2) - 1
            slide_progress = max(-1, min(1, slide_progress))

            word_start = int(self.center - len(word) // 2 + slide_progress * 30)

            for i, char in enumerate(word):
                pos = word_start + i
                if 0 <= pos < self.width:
                    distance_from_center = abs(pos - self.center)
                    max_reveal_distance = 25

                    if distance_from_center <= max_reveal_distance:
                        reveal_intensity = 1 - (distance_from_center / max_reveal_distance)
                        reveal_intensity = max(0, min(1, reveal_intensity))

                        if reveal_intensity > 0.7:
                            line[pos] = char
                        elif reveal_intensity > 0.5:
                            line[pos] = '▓'
                        elif reveal_intensity > 0.3:
                            line[pos] = '▒'
                        elif reveal_intensity > 0.1:
                            line[pos] = '░'

            frames.append(''.join(line))

        return frames

    def add_colors(self, line, word):
        colors = {
            'OpenAI': '\033[92m',      # Green
            'Anthropic': '\033[94m',   # Blue
            'Claude': '\033[95m',      # Magenta
            'Meta': '\033[96m',        # Cyan
            'Google': '\033[93m',      # Yellow
            'Microsoft': '\033[91m',   # Red
            'Apple': '\033[97m',       # White
            'Amazon': '\033[33m',      # Orange-ish
            'Tesla': '\033[91m',       # Red
            'NVIDIA': '\033[92m',      # Green
            'DeepMind': '\033[94m',    # Blue
            'Perplexity': '\033[95m',  # Magenta
            'Midjourney': '\033[96m',  # Cyan
            'Stability AI': '\033[93m' # Yellow
        }

        color = colors.get(word, '\033[97m')
        reset = '\033[0m'

        if word in line:
            return line.replace(word, f'{color}{word}{reset}')

        colored_line = ''
        for char in line:
            if char in '▓▒░':
                colored_line += f'{color}{char}{reset}'
            else:
                colored_line += char

        return colored_line

    def run(self):
        try:
            self.clear_screen()
            print("\n" * 10)
            print(" " * 25 + "🚀 Tech Animation Starting... 🚀")
            print(" " * 20 + "Press Ctrl+C to exit")
            print("\n" * 5)
            time.sleep(2)

            while True:
                for word in self.companies:
                    frames = self.create_sliding_effect(word, 0)

                    for frame in frames:
                        self.clear_screen()

                        print("\n" * 8)

                        colored_frame = self.add_colors(frame, word)
                        print(colored_frame)

                        print("\n" * 8)
                        print(" " * 30 + "Press Ctrl+C to exit")

                        time.sleep(self.animation_speed)

                    time.sleep(0.5)

        except KeyboardInterrupt:
            self.clear_screen()
            print("\n" * 10)
            print(" " * 25 + "✨ Animation stopped. Goodbye! ✨")
            print("\n" * 5)
            sys.exit(0)

if __name__ == "__main__":
    animation = TechAnimation()
    animation.run()