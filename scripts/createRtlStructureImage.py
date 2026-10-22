"""
ساخت تصویر پیش‌نمایش ساختار «مایند مپ راست به چپ»
اجرا: python3 scripts/createRtlStructureImage.py
"""
from PIL import Image, ImageDraw

WIDTH, HEIGHT = 540, 340
TEAL = (21, 170, 191)
RED = (250, 82, 82)
BLACK = (0, 0, 0)
LINE_WIDTH = 2

image = Image.new('RGB', (WIDTH, HEIGHT), (255, 255, 255))
draw = ImageDraw.Draw(image)


def draw_box(bounds, color):
    draw.rectangle(list(bounds), fill=color, outline=BLACK, width=LINE_WIDTH)


def draw_branch(parent_edge, children, trunk_x):
    """اتصال گره والد به گره‌های فرزند با خط آ elbow"""
    parent_x, parent_y = parent_edge
    children_cy = [(box[1] + box[3]) // 2 for box in children]
    # خط افقی از والد تا شاخه عمودی
    draw.line([(parent_x, parent_y), (trunk_x, parent_y)], fill=BLACK, width=LINE_WIDTH)
    # خط عمودی بین فرزندان
    draw.line([(trunk_x, children_cy[0]), (trunk_x, children_cy[-1])], fill=BLACK, width=LINE_WIDTH)
    # خط افقی به هر فرزند
    for box, child_cy in zip(children, children_cy):
        draw.line([(trunk_x, child_cy), (box[2], child_cy)], fill=BLACK, width=LINE_WIDTH)


# گره ریشه در سمت راست
root_box = (390, 131, 490, 208)
draw_box(root_box, TEAL)
root_center_y = (root_box[1] + root_box[3]) // 2

# گره‌های سطح یک
level_one_boxes = [
    (220, 51, 310, 88),
    (220, 131, 310, 168),
    (220, 211, 310, 248)
]
for box in level_one_boxes:
    draw_box(box, RED)

# گره‌های سطح دو
level_two_boxes = [
    (50, 51, 140, 88),
    (50, 131, 140, 168),
    (50, 211, 140, 248)
]
for box in level_two_boxes:
    draw_box(box, RED)

# اتصال گره ریشه به فرزندان سطح یک
draw_branch((root_box[0], root_center_y), level_one_boxes, 350)

# اتصال فرزندان سطح یک به فرزندان سطح دو
for parent_box, child_box in zip(level_one_boxes, level_two_boxes):
    parent_center_y = (parent_box[1] + parent_box[3]) // 2
    draw_branch((parent_box[0], parent_center_y), [child_box], 180)

image.save('src/assets/img/structures/mindMapRtl.png')
print('تصویر ساخته شد: src/assets/img/structures/mindMapRtl.png')
